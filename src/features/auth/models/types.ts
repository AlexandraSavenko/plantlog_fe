export interface AuthFormValues {
    email: string;
    password: string
}

export interface SignUpFormValues extends AuthFormValues {
    username: string;
    confirm: string;
}

export interface SignUpPayload extends AuthFormValues {
    username: string
}