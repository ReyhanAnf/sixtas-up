import CardPost from "./ui/posts/postCards";
import { UploadButton } from "./ui/posts/actionButton";

export default function Home() {
  return (
    <div className="px-2 flex flex-col sm:flex-row">
      <div className="left sm:w-1/3">

      </div>
      <div className="post-center sm:w-1/3">
        <CardPost />
        <div className="upload-button fixed bottom-5 right-5 sm:right-1/3 justify-center z-40" >
          <UploadButton />
        </div>
      </div>
      <div className="right sm:w-1/3">

      </div>
    </div>
  );
}
