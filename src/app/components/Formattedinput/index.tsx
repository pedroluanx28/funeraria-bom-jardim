import { FormControlProps } from "react-bootstrap/FormControl";

import Form from "react-bootstrap/Form";
import { MaskedInput } from "../MaskedInput";

type FormattedInputProps = FormControlProps & {
    controlId?: string;
    label?: string;
    isMaskedInput?: boolean;
    mask?: string | NumberConstructor | { mask: string }[] | RegExp;
};

export function FormattedInput({
    controlId,
    label,
    isMaskedInput,
    mask,
    ...rest
}: FormattedInputProps) {
    return (
        <Form.Group controlId={controlId}>
            {label && <Form.Label className="m-0">{label}</Form.Label>}

            {isMaskedInput ? (
                <MaskedInput mask={mask} {...rest} />
            ) : (
                <Form.Control
                    autoComplete="nope"
                    list="autocompleteoff"
                    {...rest}
                />
            )}
        </Form.Group>
    );
}
