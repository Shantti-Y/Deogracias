export enum basicStatus {
  NONE
}

export enum successStatus {
  CREATED_MANGA,
  UPDATED_MANGA,
  CREATED_TAG,
  UPDATED_TAG
}

export enum warningStatus {
  DELETED_MANGA,
  DELETED_TAG
}

export enum dangerStatus {
  FAILED_MANGA,
  FAILED_TAG
}

export type statusType = basicStatus | successStatus | warningStatus | dangerStatus;