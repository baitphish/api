/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as MultionApi from "../../../../api";
import * as core from "../../../../core";
export declare const CloseSessionResponseResponse: core.serialization.ObjectSchema<serializers.CloseSessionResponseResponse.Raw, MultionApi.CloseSessionResponseResponse>;
export declare namespace CloseSessionResponseResponse {
    interface Raw {
        data: string;
        session_id: string;
    }
}
