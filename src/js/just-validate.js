import JustValidate from 'just-validate';

const body = document.querySelector('body');
const backdrop = document.querySelector('[data-backdrop]');
const modal = document.querySelector('[data-modal]');
const success = document.querySelector('.success');
const successBtn = success.querySelector('[data-success-close]');

successBtn.addEventListener('click', toggleSuccess);

function toggleSuccess() {
  success.classList.toggle('success--is-hidden');
}

var validate = new JustValidate('.validateFooter', {
  errorFieldCssClass: 'warning-input',
  errorLabelCssClass: 'warning',
  errorLabelStyle: {
    color: '#ff705d',
    left: '0',
    opacity: '1',
  },
});
validate
  .addField('.footerInput', [
    {
      rule: 'required',
      errorMessage: 'This field is required!',
    },
    {
      rule: 'customRegexp',
      value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
      errorMessage: 'Not a valid email address (example@email.com)',
    },
  ])
  .onSuccess(event => {
      console.log('Validation passes and form submitted', event);
      
  });

var validate = new JustValidate('.validateSub', {
  errorFieldCssClass: 'warning-input',
  errorLabelCssClass: 'warning',
  errorLabelStyle: {
    color: '#ff705d',
    left: '0',
    opacity: '1',
  },
});
validate
  .addField('.subsInput', [
    {
      rule: 'required',
      errorMessage: 'This field is required!',
    },
    {
      rule: 'customRegexp',
      value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
      errorMessage: 'Not a valid email address (example@email.com)',
      },
  ])
  .onSuccess(event => {
    console.log('Validation passes and form submitted', event);
  });

const validation = new JustValidate('.validateModal', {
  errorFieldCssClass: 'warning-input',
  errorLabelCssClass: 'warning',
  errorLabelStyle: {
    color: '#ff705d',
    opacity: '1',
    bottom: '-15px',
    alignItems: 'center',
  },
});
validation
  .addField('.modalName', [
    {
      rule: 'required',
      errorMessage: 'This field is required!',
    },
    {
      rule: 'customRegexp',
      value: /^[a-zA-Z]+\s[a-zA-Z]+$/,
      errorMessage: 'Please enter your first and last name (Brad Pitt)',
    },
    {
      rule: 'maxLength',
      value: 50,
    },
  ])
  .addField('.modalTel', [
    {
      rule: 'required',
      errorMessage: 'This field is required!',
    },
    {
      rule: 'customRegexp',
      value: /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
      errorMessage: 'Not a valid phone number (+38(0XX)-XXX-XX-XX)',
    },
  ])
  .addField('.modalMail', [
    {
      rule: 'required',
      errorMessage: 'This field is required!',
    },
    {
      rule: 'customRegexp',
      value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
      errorMessage: 'Not a valid email address (example@email.com)',
    },
  ])
  .addField('.modalAddress', [
    {
      rule: 'required',
      errorMessage: 'This field is required!',
    },
    {
      rule: 'minLength',
      value: 5,
      errorMessage: ' Street address must be at least 5 characters (1 St.)',
    },
  ])
  .onSuccess(event => {
    backdrop.classList.toggle('backdrop--is-hidden');
    body.classList.toggle('no-scroll');
    modal.classList.toggle('modal--is-hidden');
    setTimeout(function () {
      success.classList.remove('success--is-hidden');
    }, 400);
    setTimeout(function () {
      success.classList.add('success--is-hidden');
    }, 5000);
  });
