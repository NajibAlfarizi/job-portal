// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const Jobseeker = require('../models/Jobseekers');

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             callbackURL: '/api/auth/google/callback',
//         },
//         async (accessToken, refreshToken, profile, done) => {
//             try {
//                 // Cari pengguna berdasarkan Google ID
//                 let jobseeker = await Jobseeker.findOne({ googleId: profile.id });

//                 if (!jobseeker) {
//                     // Jika pengguna belum ada, buat pengguna baru
//                     jobseeker = new Jobseeker({
//                         name: profile.displayName,
//                         email: profile.emails[0].value,
//                         googleId: profile.id,
//                         profilePicture: profile.photos[0].value,
//                     });
//                     await jobseeker.save();
//                 }

//                 return done(null, jobseeker);
//             } catch (error) {
//                 return done(error, null);
//             }
//         }
//     )
// );

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//     try {
//         const user = await Jobseeker.findById(id);
//         done(null, user);
//     } catch (error) {
//         done(error, null);
//     }
// });