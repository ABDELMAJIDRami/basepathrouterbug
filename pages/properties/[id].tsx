import {useRouter} from "next/router";

export default function property() {
  const router = useRouter();

  console.log(router);

  return (
    <>
      <div>router.query = {JSON.stringify(router.query)}</div>
      <br/>
      <div>Reload the page and check above value & browser console logs</div>
    </>
)
}