import Layout from "./layout/index";

const withLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
};

export default withLayout;
