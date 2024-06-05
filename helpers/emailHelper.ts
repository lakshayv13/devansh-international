import emailjs from '@emailjs/browser';
  
export default function sendFormUser(params: Record<string, unknown>) {
    emailjs
    .send('service_5xx6sc7', 'template_fgwpuga', params, {
        publicKey: 'rCRRFbkEixMNmUw3Y',
    })
    .then(
        (response) => {
        console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
        console.log('FAILED...', err);
        },
    );
}
