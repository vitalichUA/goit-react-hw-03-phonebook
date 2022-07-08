import styled from "styled-components";

export const ContactsItem = styled.li`
    :not(:last-child) {
        margin-bottom: 10px;
    }
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContactsButton = styled.button`
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;