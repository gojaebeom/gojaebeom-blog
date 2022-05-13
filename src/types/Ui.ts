export default interface UiState {
  categoryBoxOpen: boolean;
  modal: Modal;
}

export interface Modal {
  open: boolean;
  name: string | null;
}
