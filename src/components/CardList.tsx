import Card from "./Card";

const CardList = () => {
  return (
    <div>
      <div className="col-span-5">
        <h1 className="my-12">Recent Posts</h1>
        <div className="">
          {posts?.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;

const posts = [
  {
    _id: 1,
    title: "My First Post",
    desc: "This is my first blog post.",
    author: "John Doe",
    createdAt: '25-09-2024',
    
  },
];
