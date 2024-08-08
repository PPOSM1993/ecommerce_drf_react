export const validEmail = new RegExp(
    '^[a-zA-Z9-9.:$!%-]+@[a-zAZ0-9._]+[a-zA-Z]$'
)

export const validPassword = new RegExp('^(?=.*[A-Za-z])(?=.*?[0-9]).{5,}$');