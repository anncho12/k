function Profile(){
    return (
        <li class="flex alin justify-center grow items-center bg-blue-50 rounded-l-full float-left">
            <button class="mx-5 my-6">
                내 프로필
            </button>
        </li>
    )
}

function MatchUp(){
    return (
        <li class="flex justify-center grow items-center bg-green-50 rounded-r-full list-none">
            <button class="mx-5 my-6">
                매치업
            </button>
        </li>
    )
}

export default function MiddleBanner2(){
    return (
        <nav class="flex pt-16 pb-20 justify-center">
            <ul class="flex justify-center items-center w-10/12">
                <Profile></Profile>
                <MatchUp></MatchUp>
            </ul>
        </nav>
    )
}