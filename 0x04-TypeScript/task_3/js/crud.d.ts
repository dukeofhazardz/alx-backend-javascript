import { RowID, RowElement } from "./interface";

declare module 'crud.js' {
    export default insertRow(row: RowElement): number;
    export default deleteRow(rowId: RowID): void;
    export default updateRow(rowId: RowID, row: RowElement): RowID;
}