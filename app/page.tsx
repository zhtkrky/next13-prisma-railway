import Form from "./form";
import styles from "./page.module.css";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data: { id: number; title: string }[] = await getPosts();
  console.log(data);
  return (
    <main className={styles.main}>
      {data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
      <Form />
    </main>
  );
}
