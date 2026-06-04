export interface ApiTextValue {
    $: string;
}

export interface ApiTariffDetailDto {
    name?: ApiTextValue;
    value?: ApiTextValue;
}

export interface ApiTariffPriceDto {
    cost?: ApiTextValue;
    currency?: ApiTextValue;
    period?: ApiTextValue;
}

export interface ApiTariffDataCenterDto {
    id?: ApiTextValue;
    value?: ApiTextValue;
}

export interface ApiTariffDto {
    id?: ApiTextValue;
    keyvalue?: ApiTextValue;
    title?: ApiTextValue;
    title_tag?: ApiTextValue;
    datacenter?: ApiTariffDataCenterDto;
    detail?: ApiTariffDetailDto[];
    prices?: {
        price?: ApiTariffPriceDto[];
    };
}

export interface TariffsApiResponse {
    doc?: {
        list?: Array<{
            elem?: ApiTariffDto[];
        }>;
    };
}