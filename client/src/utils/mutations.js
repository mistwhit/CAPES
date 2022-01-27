import { gql } from '@apollo/client';

// export const ADD_EMERGENCY = gql`
//   mutation addEmergency($severity: String!, $description: String!, $zipcode: Int!, $date: Int!, $heroes: [ID]!) {
//     addEmergency(severity: $severity, description: $description, zipcode: $zipcode, date: $date, heroes: $heroes) {
//       severity: String!
//       description: String
//       zipcode: Int
//       date: Int
//       heroes: {
//         _id: ID
//         name: String
//         severity: String
//         description: String
//       }
//     }
//   }
// `;

export const ADD_PROFILE = gql`
mutation addProfile(
    $name: String!
    $email: String!
    $password: String!
  ) {
    addProfile(
      name: $name
      email: $email
      password: $password
    ) {
      token
      profile {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
          token
          profile {
            _id
            name
          }
    }
}
`