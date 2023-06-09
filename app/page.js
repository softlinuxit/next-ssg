import nextSSGApi from "@/services/NextSSG"


export default async function Home() {
  const users = await nextSSGApi();
  console.log(users)
  return (
    <main className="">
      <div>
        Total User: {users.length}
        {
          users.map(user => <p>
            {user.name}
          </p>)
        }
      </div>
    </main>
  )
}
