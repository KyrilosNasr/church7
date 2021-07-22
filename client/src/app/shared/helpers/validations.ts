const validation_messages =  [
    { type: 'required', message: 'مطلوب' },
    { type: 'minlength', message: 'لابد أن لا يقل عن' },
    { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
    { type: 'pattern', message: 'Your username must contain only numbers and letters' },
    { type: 'validUsername', message: 'Your username has already been taken' },
    { type: 'areEqual', message: 'Password mismatch' },
    { type: 'email', message: 'صيغة خاطئة' },
  ]
export {validation_messages}
