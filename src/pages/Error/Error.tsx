import { Page } from "../../components/Page";

export const ErrorPage = (): JSX.Element => {
  return (
    <Page>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        Something went wrong!
      </div>
    </Page>
  );
};
