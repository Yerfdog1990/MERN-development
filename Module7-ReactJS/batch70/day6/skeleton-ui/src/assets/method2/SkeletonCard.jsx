import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
    return (
        <div className="bg-gray-700 w-full max-w-md p-4 rounded-lg mb-4 flex items-center space-x-4">
            {/* Avatar circle */}
            <div>
                <Skeleton circle height={48} width={48} />
            </div>

            {/* Text lines */}
            <div className="flex-1">
                <Skeleton height={20} width="80%" />
                <Skeleton height={16} width="60%" className="mt-2" />
                <Skeleton height={16} width="40%" className="mt-2" />
            </div>
        </div>
    );
};

export default SkeletonCard;