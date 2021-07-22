import 'tailwindcss/tailwind.css';

export default function Dashboard({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
