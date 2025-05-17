"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function CompleteProfilePage() {
  const { user, isLoaded } = useUser();
  const [form, setForm] = useState({ fullName: "", role: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !user) return;

    // Kirim hanya userId Clerk, fullName, dan role
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/jobseeker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        fullName: form.fullName,
        role: form.role,
      }),
    });
    if (res.ok) setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 font-sans">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">Lengkapi Profil Jobseeker</h1>
        <input
          className="input text-black"
          name="fullName"
          placeholder="Nama Lengkap"
          onChange={handleChange}
          required
        />
        <select
          className="input text-black"
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        >
          <option value="">-- Pilih Role --</option>
          <option value="jobseeker">Jobseeker</option>
        </select>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-200"
        >
          Simpan
        </button>
        {success && (
          <div className="mt-4 text-green-600 text-center font-semibold">
            Data berhasil disimpan!
          </div>
        )}
      </form>
      <style jsx global>{`
        .input {
          font-family: 'Inter', 'Geist', 'sans-serif';
          margin-bottom: 0.5rem;
          padding: 0.5rem;
          border-radius: 0.375rem;
          border: 1px solid #d1d5db;
          width: 100%;
          outline: none;
          transition: box-shadow 0.2s;
        }
        .input:focus {
          box-shadow: 0 0 0 2px #2563eb33;
          border-color: #2563eb;
        }
      `}</style>
    </div>
  );
}