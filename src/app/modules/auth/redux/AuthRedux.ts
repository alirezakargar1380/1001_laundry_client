import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest} from 'redux-saga/effects'
import {UserModel} from '../models/UserModel'
import {getUserByToken} from './AuthCRUD'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  Login: '[Login] Action',
  Logout: '[Logout] Action',
  Register: '[Register] Action',
  UserRequested: '[Request User] Action',
  UserLoaded: '[Load User] Auth API',
  SetUser: '[Set User] Action',
}

const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
}

export interface IAuthState {
  user?: UserModel
  accessToken?: string
}

export const reducer = persistReducer(
  {storage, key: 'v100-demo1-auth', whitelist: ['user', 'accessToken']},
  (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
    switch (action.type) {
      case actionTypes.Login: {
        console.log("im login acton")
        const accessToken = action.payload?.accessToken
        return {accessToken, user: undefined}
      }

      case actionTypes.Register: {
        const accessToken = action.payload?.accessToken
        return {accessToken, user: undefined}
      }

      case actionTypes.Logout: {
        return initialAuthState
      }

      case actionTypes.UserRequested: {
        return {...state, user: undefined}
      }

      case actionTypes.UserLoaded: {
        const user = action.payload?.user
        return {...state, user}
      }

      case actionTypes.SetUser: {
        const user = action.payload?.user
        return {...state, user}
      }

      default:
        return state
    }
  }
)

export const actions = {
  login: (accessToken: string) => ({type: actionTypes.Login, payload: {accessToken}}),
  register: (accessToken: string) => ({
    type: actionTypes.Register,
    payload: {accessToken},
  }),
  logout: () => ({type: actionTypes.Logout}),
  requestUser: () => ({
    type: actionTypes.UserRequested,
  }),
  fulfillUser: (user: UserModel) => ({type: actionTypes.UserLoaded, payload: {user}}),
  setUser: (user: UserModel) => ({type: actionTypes.SetUser, payload: {user}}),
}

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    console.log("takeLatest loginSaga")
    yield put(actions.requestUser())
  })

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser())
  })

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    console.log("takeLatest userRequested")
    // const {data: user} = yield getUserByToken()
    const user: any = {
      id: 1,
      username: "admin",
      email: "admin@demo.com",
      auth: {
        accessToken: "access-token-8f3ae836da744329a6f93bf20594b5cc",
        refreshToken: "access-token-f8c137a2c98743f48b643e71161d90aa"
      },
      roles: [
        1
      ],
      "pic": "/media/avatars/150-2.jpg",
      "fullname": "Sean S",
      "firstname": "Sean",
      "lastname": "Stark",
      "occupation": "CEO",
      "companyName": "Keenthemes",
      "phone": "456669067890",
      "language": "en",
      "timeZone": "International Date Line West",
      "website": "https://keenthemes.com",
      "emailSettings": {
        "emailNotification": true,
        "sendCopyToPersonalEmail": false,
        "activityRelatesEmail": {
          "youHaveNewNotifications": false,
          "youAreSentADirectMessage": false,
          "someoneAddsYouAsAsAConnection": true,
          "uponNewOrder": false,
          "newMembershipApproval": false,
          "memberRegistration": true
        },
        "updatesFromKeenthemes": {
          "newsAboutKeenthemesProductsAndFeatureUpdates": false,
          "tipsOnGettingMoreOutOfKeen": false,
          "thingsYouMissedSindeYouLastLoggedIntoKeen": true,
          "newsAboutStartOnPartnerProductsAndOtherServices": true,
          "tipsOnStartBusinessProducts": true
        }
      },
      "communication": {
        "email": true,
        "sms": true,
        "phone": false
      },
      "address": {
        "addressLine": "L-12-20 Vertex, Cybersquare",
        "city": "San Francisco",
        "state": "California",
        "postCode": "45000"
      },
      "socialNetworks": {
        "linkedIn": "https://linkedin.com/admin",
        "facebook": "https://facebook.com/admin",
        "twitter": "https://twitter.com/admin",
        "instagram": "https://instagram.com/admin"
      }
    }
    // console.log(user)
    yield put(actions.fulfillUser(user))
  })
}
