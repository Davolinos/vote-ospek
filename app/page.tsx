
import Form from "./_components/form";
import postData from "./_server/post";

export default function Vote() {
  return (
    <>
    <h1 className="center">
      Pemilihan Suara Ketua OSIS/MPK
    </h1>
    <Form func={postData}/>
    </>
  );
}