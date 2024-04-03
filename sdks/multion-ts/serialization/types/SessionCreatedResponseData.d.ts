/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as MultionApi from "../../api";
import * as core from "../../core";
export declare const SessionCreatedResponseData: core.serialization.ObjectSchema<serializers.SessionCreatedResponseData.Raw, MultionApi.SessionCreatedResponseData>;
export declare namespace SessionCreatedResponseData {
    interface Raw {
        status: string;
        message: string;
        session_id: string;
        url: string;
        screenshot: string;
    }
}
