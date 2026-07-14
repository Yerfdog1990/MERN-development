import Skeleton from "./Skeleton";

const SkeletonCard = () => {
    return (
        <div className="bg-gray-700 w-full max-w-md p-4 rounded-lg mb-4 flex items-center space-x-4">
            {/* Avatar circle */}
            <Skeleton className="h-12 w-12 rounded-full" />

            {/* Text lines */}
            <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-3/4" />   {/* name */}
                <Skeleton className="h-4 w-full" />  {/* email */}
                <Skeleton className="h-4 w-1/2" />   {/* city */}
            </div>
        </div>
    );
};

export default SkeletonCard;