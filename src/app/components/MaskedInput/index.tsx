import { IMaskMixin } from "react-imask";

import FormControl from "react-bootstrap/FormControl";

export const MaskedInput = IMaskMixin(({ inputRef, ...props }: any) => (
    <FormControl
        ref={inputRef}
        autoComplete="nope"
        list="autocompleteOff"
        {...props}
    />
));
