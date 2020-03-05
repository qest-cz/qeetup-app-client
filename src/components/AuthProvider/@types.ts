export enum AuthState {
  VERIFIED,
  PENDING,
  NOT_VERIFIED,
}

export type LoginSuccessFn = (token: string) => void
export type LogoutSuccessFn = () => void

export interface ContextProps {
  state: AuthState
  loginSuccess: LoginSuccessFn
  logoutSuccess: LogoutSuccessFn
}
