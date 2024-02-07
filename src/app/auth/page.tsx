import MaxWidthWrapper from "@/components/helpComponents/MaxWidthWrapper/MaxWidthWrapper"

const AuthPage=()=>{
    return(
        <div className="">
            <MaxWidthWrapper>
                <div className="h-full  w-full flex  justify-center py-52 items-center">
                    <div className="bg-gray-900 p-10 md:p-24 flex flex-col gap-5 rounded-sm">
                        <div className="font-semibold bg-blue-950 p-5 rounded-sm flex justify-center">Sign Up with Google</div>
                        <div className="font-semibold bg-gray-950 p-5 rounded-sm flex justify-center">Sign Up with Twitter</div>
                        <div className="font-semibold bg-green-950 p-5 rounded-sm flex justify-center">Sign Up with Facebook</div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default AuthPage