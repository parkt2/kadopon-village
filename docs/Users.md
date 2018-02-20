## Registering
Users register using a simple form:
 * email (fairly simple validation)
 * password (we don't mandate any rules besides length > 7)
 * confirm password (just match against the password)

Naturally work needs to be done to make sure this is at least somewhat secure,
but that comes later.

## Forgot Password
Another fairly simple form, probably via a small link in the login/register form.
 * email

This progresses to a new form, regardless of whether the email was valid or not:
 * email
 * new password
 * confirm new password
 * confirmation code

We use a confirmation code to combo with 2FA implementation, which is a possibility
in the future if users so wish; otherwise it can just be sent to an email. I find
this to be much more convenient than a link to reset the password.

## Login
Users login as normal:
* email
* password

We have the option to open a registration form if the email is not in our database.

This should create a JWT token (redundant, I know) to authenticate a user for
their relevant board games or administrative services. Naturally, this JWT token
is used in API calls in the Authorization header (a la Bearer) to validate
their operations. If they choose to stay logged in, this token does not expire
until a logout operation is called; otherwise, we can trivially refresh the
token every time the user performs an operation and it can expire naturally.

## Logout
Logging out clears a JWT token and then promptly returns them to the login page.
Nothing special to see here.
