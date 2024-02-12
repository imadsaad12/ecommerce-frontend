import Layout from "./layout/index";
import ProtectedRoute from "../routes/protectedRoutes";

const withLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <ProtectedRoute>
        <Layout>
          <WrappedComponent {...props} />
        </Layout>
      </ProtectedRoute>
    );
  };
};

export default withLayout;
