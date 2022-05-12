import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { toggle } from "store/modules/toggle";

export default function useCategoryBox() {
  const { activite } = useSelector((state: RootState) => state.categoryBoxToggle);
  const dispatch = <AppDispatch>useDispatch();

  const props = {
    categoryBoxToggle: {
      activite,
      setActivate: () => {
        dispatch(toggle());
      },
    },
  };

  return props;
}
