import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="w-full h-screen flex justify-center items-center">
				<div className="w-full h-full flex justify-center items-center flex-col gap-4">
					<h1 className="text-3xl font-bold">Hellow</h1>
					<div className="">
						<Link href={"/contact"}>
							<button className="px-6 py-2 bg-green-500 text-white font-semibold rounded">
								Contact Page
							</button>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
