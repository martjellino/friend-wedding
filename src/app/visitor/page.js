import Image from "next/image";

async function getVisitorById(id) {
  const res = await fetch(`http://localhost:3000/api/v1/visitor/${id}`, {
    cache: "no-cache"
  })
  const { data } = await res.json()
  // console.log(data);
  return data
}
