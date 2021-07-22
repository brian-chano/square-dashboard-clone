import Layout from '../../components/Layout';

export default function Index() {
  return <h2>Dashboard</h2>;
}

Index.getLayout = function getLayout(page) {
  return <Layout title='Square Dashboard'>{page}</Layout>;
};
