import { BillBoard } from '@/store';

const getBillBoard = async (BillBoardId: string): Promise<BillBoard> => {
  const api_url = `${process.env.NEXT_PUBLIC_API_URL}/billboards/${BillBoardId}`;
  const res = await fetch(api_url);
  return res.json();
};

export default getBillBoard;
