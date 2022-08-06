import { Route, Routes } from "react-router-dom";

/* Pages */
import { Pages } from "./pagesImports";

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/products">
          <Route index element={<Pages.Error />} />
          <Route path=":id" element={<Pages.Products />} />
        </Route>
        <Route path="/product">
          <Route index element={<Pages.Error />} />
          <Route path="params">
            <Route index element={<Pages.Error />} />
            <Route
              path=":id"
              element={
                <>
                  <Pages.Product />
                  <Pages.Params />
                </>
              }
            />
          </Route>
          <Route path="comments">
            <Route index element={<Pages.Error />} />
            <Route
              path=":id"
              element={
                <>
                  <Pages.Product />
                  <Pages.Comments />
                </>
              }
            />
          </Route>
        </Route>
        <Route path="/favorites" element={<Pages.Favorites />} />
        <Route path="/card" element={<Pages.Card />} />
        <Route
          path="/login"
          element={
            <Pages.AuthRoute>
              <Pages.Login />
            </Pages.AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <Pages.AuthRoute>
              <Pages.SignUp />
            </Pages.AuthRoute>
          }
        />
        <Route path="/userprofile/:token" element={<Pages.ExchangeToken />} />
        <Route
          path="/userprofile"
          element={
            <Pages.ProtectedRoute>
              <Pages.UserProfile />
            </Pages.ProtectedRoute>
          }
        >
          <Route path="orders" element={<Pages.Orders />} />
          <Route path="personaldata" element={<Pages.PersonalData />} />
        </Route>
        <Route path="*" element={<Pages.Error />} />
      </Routes>
    </>
  );
};

export default RoutesPage;
