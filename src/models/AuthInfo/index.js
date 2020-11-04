import moment from 'moment';
import { isNil } from 'lodash/fp';

class AuthInfo {
  static propTypes = {
    id: Number,
    username: String,
    firstName: String,
    lastName: String,
    accessToken: String,
    expiresIn: Number,
    userType: String,
  };

  constructor(authInfo) {
    if (!isNil(authInfo)) {
      const {
        id,
        username,
        firstName,
        lastName,
        accessToken,
        expiresIn,
        userType,
      } = authInfo;
      this.id = id;
      this.username = username;
      this.firstName = firstName;
      this.lastName = lastName;
      this.accessToken = accessToken;
      this.expiresIn = expiresIn;
      this.userType = userType;
    }
  }

  /**
   * check if user is valid
   */
  isValid = (): boolean => {
    const { expiresIn, issuedDate } = this;
    const expiredDate = moment(issuedDate).add(expiresIn, 'seconds');
    return expiredDate >= moment();
  };
}

export default AuthInfo;
