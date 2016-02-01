import createPromiseHandler from '../utils/createPromiseHandler';
import {User} from '../models';
import bcrypt from 'bcrypt';

////////////////////
// Route Handlers //
////////////////////

/**
 * Login
 */
export const postLogin = createPromiseHandler((req, res) => {
  if (req.body.email === '' || req.body.password === '') {
    throw new Error('Credentials required!');
  }

  return User.where('email', req.body.email).fetch()
    .then(user => {
      if (!user) {
        throw new Error('Cannot find user!!');
      }

      return new Promise((resolve, reject) => {
        bcrypt.compare(req.body.password, user.get('password'), (err, result) => {
          if (err) {
            return reject({message: 'Cannot find user!!'});
          }
          // if result is false, wrong password
          if (!result) {
            return reject({message: 'Wrong password'});
          }

          const response = {
            id: user.get('id'),
            email: user.get('email'),
            is_admin: user.get('is_admin')
          }

          resolve({ user: response });
        });
      });
    });
});
