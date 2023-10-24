import { Outlet } from "react-router-dom";

import { PageHeader } from "../../components/Page";

export const StoreLayout = ({}: StoreLayoutProps): JSX.Element => {
  return (
    <div className="grid h-screen">
      <PageHeader />
      <Outlet />
    </div>
  );
};
