import { useParams } from "react-router-dom";

import { ContainerErrorPage, ContentError } from "./styles";
import ErrorCard from "../../components/errorCard/errorCard";
import { Header } from "../../components/header/header";

export default function ErrorPage({ errorType }: { errorType?: number }) {
  const { error } = useParams();
  const statusError = errorType ? errorType : error ? error : 404;

  return (
    <>
      <Header />
      <ContainerErrorPage>
        <ContentError>
          <ErrorCard statusCode={+statusError} />
        </ContentError>
      </ContainerErrorPage>
    </>
  );
}
