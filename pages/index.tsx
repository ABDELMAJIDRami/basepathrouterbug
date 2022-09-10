/** Add your relevant code here for the issue to reproduce */
import Link from "next/link";

export default function Home() {
  return (
    <Link href='properties/1'>
      <a>Click to route to dynamic page '/manager/properties/1'</a>
    </Link>
  )
}
