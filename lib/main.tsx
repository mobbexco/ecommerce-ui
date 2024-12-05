import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FinanceWidget from "./FinanceWidget/FinanceWidget.tsx";
import "./index.css";

const json = `[
        {
            "installments": {
                "enabled": false
            },
            "view": {
                "group": "cash",
                "subgroup_title": "Pago en Efectivo",
                "subgroup_logo": "https://res.sugaway.io/zkeDOKE_pgZB-mm2rMhDlJ1QQuk=//images/sources/original/cash.png",
                "type": "selector"
            },
            "source": {
                "reference": "arg_mobbex_cash",
                "name": "Rapipago/PagoFácil"
            }
        },
        {
            "installments": {
                "enabled": false
            },
            "view": {
                "group": "cash",
                "subgroup_title": "Pago en Efectivo",
                "subgroup_logo": "https://res.sugaway.io/zkeDOKE_pgZB-mm2rMhDlJ1QQuk=//images/sources/original/cash.png",
                "type": "selector"
            },
            "source": {
                "reference": "arg_mobbex_cash",
                "name": "Rapipago/PagoFácil"
            }
        },
        {
            "installments": {
                "enabled": false
            },
            "view": {
                "group": "prismaqr",
                "subgroup_title": "Pagá con MODO",
                "subgroup_logo": "https://res.sugaway.io/bx1FO91ws02sI0rFCMXhfDlSM1w=//images/sources/original/modo.png",
                "type": "prismaqr"
            },
            "source": {
                "reference": "arg.qr.prisma",
                "name": "MODO"
            }
        },
        {
            "installments": {
                "enabled": false
            },
            "view": {
                "group": "khipu",
                "subgroup_title": "Pagá desde tu Banco",
                "subgroup_logo": "https://res.sugaway.io/vP-xdjQ3mbwo5A-PSf5YzVYdRrM=//images/sources/original/khipu.png",
                "type": "khipu"
            },
            "source": {
                "reference": "khipu",
                "name": "Pago con Cuenta Bancaria via Khipu"
            }
        },
        {
            "installments": {
                "enabled": true,
                "list": [
                    {
                        "uid": "VRON9H6G0NQV03UOR7",
                        "name": "Débito",
                        "description": "",
                        "count": 1,
                        "reference": "1",
                        "tags": [],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1500,
                                "count": 1
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    }
                ]
            },
            "view": {
                "group": "card",
                "subgroup_title": "Tarjeta de Crédito/Débito",
                "subgroup_logo": "https://res.sugaway.io/g9ROENHebGamEm8iZUbPJYuevDY=//images/sources/original/card.png",
                "type": "card"
            },
            "source": {
                "reference": "visa.debit",
                "name": "Visa Débito"
            }
        },
        {
            "installments": {
                "enabled": true,
                "list": [
                    {
                        "uid": "3FS64M08CKVO51JG1R",
                        "name": "1 Cuota Recargo",
                        "description": "20% de recargo",
                        "count": 1,
                        "reference": "1",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "65b950537af7d8ae6a382827"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "65b950537af7d8ae6a382828"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1800,
                                "count": 1
                            },
                            "total": 1800,
                            "financial": {
                                "percentage": 20,
                                "amount": 300
                            }
                        }
                    },
                    {
                        "uid": "SHRUC41VAEH6JIMV5E",
                        "name": "1 Cuota Descuento",
                        "description": "20% de descuento",
                        "count": 1,
                        "reference": "1",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "65b950a305b68086acce17db"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "65b950a305b68086acce17dc"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1200,
                                "count": 1
                            },
                            "total": 1200,
                            "financial": {
                                "percentage": -20,
                                "amount": -300
                            }
                        }
                    },
                    {
                        "uid": "0J1OMBAQQIQDYJN8UD",
                        "name": "1 cuota prueba",
                        "description": "Una cuota prueba",
                        "count": 1,
                        "reference": "1",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "660da1e59b5a9feb289d0105"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "660da1e59b5a9feb289d0106"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1500,
                                "count": 1
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    },
                    {
                        "uid": "FJXM33NP4XNEB43GUD",
                        "name": "1 Cuota",
                        "description": "",
                        "count": 1,
                        "reference": "1",
                        "tags": [],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1500,
                                "count": 1
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    },
                    {
                        "uid": "OE2M5C5KXVHTE7LMWB",
                        "name": "3 cuotas ",
                        "description": "Tres cuotas",
                        "count": 3,
                        "reference": "3_cloned",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "660da314d1330961476b1280"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "660da314d1330961476b1281"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 500,
                                "count": 3
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    }
                ]
            },
            "view": {
                "group": "card",
                "subgroup_title": "Tarjeta de Crédito/Débito",
                "subgroup_logo": "https://res.sugaway.io/g9ROENHebGamEm8iZUbPJYuevDY=//images/sources/original/card.png",
                "type": "card"
            },
            "source": {
                "reference": "visa",
                "name": "Visa"
            }
        },
        {
            "installments": {
                "enabled": true,
                "list": [
                    {
                        "uid": "vgrShISsp",
                        "name": "Prepago",
                        "description": "",
                        "count": 1,
                        "reference": "1",
                        "tags": [],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1500,
                                "count": 1
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    }
                ]
            },
            "view": {
                "group": "card",
                "subgroup_title": "Tarjeta de Crédito/Débito",
                "subgroup_logo": "https://res.sugaway.io/g9ROENHebGamEm8iZUbPJYuevDY=//images/sources/original/card.png",
                "type": "card"
            },
            "source": {
                "reference": "mastercard.prepaid",
                "name": "Mastercard Prepaga"
            }
        },
        {
            "installments": {
                "enabled": true,
                "list": [
                    {
                        "uid": "H9X3CAEqp",
                        "name": "Débito",
                        "description": "",
                        "count": 1,
                        "reference": "1",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "65c26bc480614b0929b252cc"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "65c26bc480614b0929b252cd"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1500,
                                "count": 1
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    }
                ]
            },
            "view": {
                "group": "card",
                "subgroup_title": "Tarjeta de Crédito/Débito",
                "subgroup_logo": "https://res.sugaway.io/g9ROENHebGamEm8iZUbPJYuevDY=//images/sources/original/card.png",
                "type": "card"
            },
            "source": {
                "reference": "mastercard.debit",
                "name": "Mastercard Débito"
            }
        },
        {
            "installments": {
                "enabled": true,
                "list": [
                    {
                        "uid": "SVQGIW4XQFRY7M0JL0",
                        "name": "1 Cuota prueba",
                        "description": "",
                        "count": 1,
                        "reference": "1",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "6620218f428e6c4a33785f72"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "6620218f428e6c4a33785f73"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1650,
                                "count": 1
                            },
                            "total": 1650,
                            "financial": {
                                "percentage": 10,
                                "amount": 150
                            }
                        }
                    }
                ]
            },
            "view": {
                "group": "card",
                "subgroup_title": "Tarjeta de Crédito/Débito",
                "subgroup_logo": "https://res.sugaway.io/g9ROENHebGamEm8iZUbPJYuevDY=//images/sources/original/card.png",
                "type": "card"
            },
            "source": {
                "reference": "amex",
                "name": "American Express"
            }
        },
        {
            "installments": {
                "enabled": true,
                "list": [
                    {
                        "uid": "EvaE3GNtc",
                        "name": "1 Cuota",
                        "description": "",
                        "count": 1,
                        "reference": "1",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "65d77d024eb76872378e0df8"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "65d77d024eb76872378e0df9"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1500,
                                "count": 1
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    }
                ]
            },
            "view": {
                "group": "card",
                "subgroup_title": "Tarjeta de Crédito/Débito",
                "subgroup_logo": "https://res.sugaway.io/g9ROENHebGamEm8iZUbPJYuevDY=//images/sources/original/card.png",
                "type": "card"
            },
            "source": {
                "reference": "cabal",
                "name": "Cabal"
            }
        },
        {
            "installments": {
                "enabled": true,
                "list": [
                    {
                        "uid": "qdBOor2uZ",
                        "name": "Débito",
                        "description": "",
                        "count": 1,
                        "reference": "1",
                        "tags": [],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1500,
                                "count": 1
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    }
                ]
            },
            "view": {
                "group": "card",
                "subgroup_title": "Tarjeta de Crédito/Débito",
                "subgroup_logo": "https://res.sugaway.io/g9ROENHebGamEm8iZUbPJYuevDY=//images/sources/original/card.png",
                "type": "card"
            },
            "source": {
                "reference": "cabal.debit",
                "name": "Cabal Débito"
            }
        },
        {
            "installments": {
                "enabled": true,
                "list": [
                    {
                        "uid": "6NYNitJtP",
                        "name": "1 cuota",
                        "description": "Una cuota",
                        "count": 1,
                        "reference": "1",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "65bcf30845374619dcc1b0b6"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "65bcf30845374619dcc1b0b7"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1500,
                                "count": 1
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    },
                    {
                        "uid": "45eawaolq3",
                        "name": "6 cuotas",
                        "description": "Seis cuotas sin recargo",
                        "count": 6,
                        "reference": "6",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "65bbd833c965b11766feb15f"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "65bbd833c965b11766feb160"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 250,
                                "count": 6
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    },
                    {
                        "uid": "5C9DBOR5EV7KAQHYQ6",
                        "name": "6 cuotas (Recargo)",
                        "description": "20% de regargo en 6 cuotas",
                        "count": 6,
                        "reference": "6_cloned",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "20",
                                "label": "CFT",
                                "_id": "65b952da05b68086acce4669"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "15",
                                "label": "TNA",
                                "_id": "65b952da05b68086acce466a"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 287.5,
                                "count": 6
                            },
                            "total": 1725,
                            "financial": {
                                "percentage": 15,
                                "amount": 225
                            }
                        }
                    },
                    {
                        "uid": "polC9wrIn",
                        "name": "8 cuotas",
                        "description": "8 cuotas con recargo",
                        "count": 8,
                        "reference": "8",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "66202592428e6c4a3378c7a1"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "66202592428e6c4a3378c7a2"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 206.25,
                                "count": 8
                            },
                            "total": 1650,
                            "financial": {
                                "percentage": 10,
                                "amount": 150
                            }
                        }
                    }
                ]
            },
            "view": {
                "group": "card",
                "subgroup_title": "Tarjeta de Crédito/Débito",
                "subgroup_logo": "https://res.sugaway.io/g9ROENHebGamEm8iZUbPJYuevDY=//images/sources/original/card.png",
                "type": "card"
            },
            "source": {
                "reference": "naranja",
                "name": "Tarjeta Naranja"
            }
        },
        {
            "installments": {
                "enabled": true,
                "list": [
                    {
                        "uid": "FXM_AVBWZ",
                        "name": "1 cuota",
                        "description": "",
                        "count": 1,
                        "reference": "1",
                        "tags": [],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 1500,
                                "count": 1
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    },
                    {
                        "uid": "xp4VoYnCP",
                        "name": "3 cuotas",
                        "description": "",
                        "count": 3,
                        "reference": "3",
                        "tags": [],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 500,
                                "count": 3
                            },
                            "total": 1500,
                            "financial": {
                                "percentage": 0,
                                "amount": 0
                            }
                        }
                    },
                    {
                        "uid": "9kaV9uocD",
                        "name": "3 cuotas con descuento",
                        "description": "",
                        "count": 3,
                        "reference": "3",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "663be696eb0f41d8c167666b"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "663be696eb0f41d8c167666c"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 400,
                                "count": 3
                            },
                            "total": 1200,
                            "financial": {
                                "percentage": -20,
                                "amount": -300
                            }
                        }
                    },
                    {
                        "uid": "Ahn8JDKe5",
                        "name": "3 cuotas con recargo",
                        "description": "",
                        "count": 3,
                        "reference": "3",
                        "tags": [
                            {
                                "visibility": "public",
                                "key": "arg.cft",
                                "value": "0",
                                "label": "CFT",
                                "_id": "663be58f8311a339b75f2350"
                            },
                            {
                                "visibility": "public",
                                "key": "arg.tna",
                                "value": "0",
                                "label": "TNA",
                                "_id": "663be58f8311a339b75f2351"
                            }
                        ],
                        "totals": {
                            "currency": {
                                "value": "ARS",
                                "label": "Peso Argentino",
                                "symbol": "$",
                                "locale": "es-AR",
                                "isoCode": "032",
                                "exponent": 2,
                                "hidden": false
                            },
                            "installment": {
                                "amount": 725,
                                "count": 3
                            },
                            "total": 2175,
                            "financial": {
                                "percentage": 45,
                                "amount": 675
                            }
                        }
                    }
                ]
            },
            "view": {
                "group": "card",
                "subgroup_title": "Tarjeta de Crédito/Débito",
                "subgroup_logo": "https://res.sugaway.io/g9ROENHebGamEm8iZUbPJYuevDY=//images/sources/original/card.png",
                "type": "card"
            },
            "source": {
                "reference": "mastercard",
                "name": "Mastercard"
            }
        }
    ]`;

const sources = JSON.parse(json);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FinanceWidget sources={sources} />
  </StrictMode>
);
