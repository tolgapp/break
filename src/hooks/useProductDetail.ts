import { useCallback, useState } from "react";

export const useProductDetail = () => {
    const [openDetail, setOpenDetail] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    const handleClick = useCallback((id: number) => {
      setSelectedProductId(id);
      setOpenDetail(true);
    }, []);

    const closeDetail = useCallback(() => {
      setOpenDetail(false);
      setSelectedProductId(null);
    }, []);

    return {
        openDetail, selectedProductId, handleClick, closeDetail
    }
}
export default useProductDetail