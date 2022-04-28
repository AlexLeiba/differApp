export type OperationResult<D, H = () => void> = [
  {
    data: D;
    loading: boolean;
    error: boolean;
    fetched?: boolean;
  },
  H
];

export type Operation<H = () => void> = [
  {
    loading: boolean;
    error: boolean;
    fetched?: boolean;
  },
  H
];

export type LocalOperationResult<D = null, H = () => void> = [
  {
    data: D;
  },
  H
];

export type LocalOperation<H = () => void> = H;

export type ActivityResult<H = () => void> = [
  {
    loading: boolean;
    error: boolean;
  },
  H
];
