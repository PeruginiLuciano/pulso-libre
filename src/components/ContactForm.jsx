import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeorkwpb"); 
  // 👆 ese ID te lo da Formspree cuando creás el form

  if (state.succeeded) {
    return <p className="text-green-500 text-center">Gracias! Tu mensaje fue enviado ✅</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-2xl">
      

      <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="block mt-4 mb-2 font-medium text-gray-700">
        Mensaje
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        rows="4"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition"
      >
        Enviar
      </button>
    </form>
  );
}
