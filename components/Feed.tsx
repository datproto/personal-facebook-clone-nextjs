import Stories from "./Stories";

function Feed() {
  return (
    <div className={"flex-grow h-screen pb-44 pt-6"}>
      <div>
        <Stories />
      </div>
    </div>
  )
}

export default Feed