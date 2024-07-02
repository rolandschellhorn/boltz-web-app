const dict = {
    en: {
        language: "English",
        status: "Status",
        feedback: "Got Feedback? Join our",
        fast: "Fast",
        l2: "Built on Layer 2",
        l2_sub: "Boltz utilizes Layer 2 scaling technologies like the Lightning Network",
        assets_sub: "Lightning / Bitcoin / Liquid",
        safe: "Safe",
        non_custodial: "Non-Custodial",
        non_custodial_sub:
            "Swaps on Boltz are atomic, cryptography ensures that users are always in control of their money",
        node: "Lightning Node",
        lightningnode: "view lightning node",
        error: "Error",
        error_subline: "Invalid response from the API, something is wrong.",
        error_wasm: "WebAssembly not supported",
        history: "History",
        swap: "Swap",
        channel: "Channel",
        refund: "Refund",
        blog: "Blog",
        documentation: "Docs",
        onion: "Onion",
        blockexplorer: "open {{ typeLabel }}",
        blockexplorer_lockup_address: "lockup address",
        blockexplorer_lockup_tx: "lockup transaction",
        blockexplorer_claim_tx: "claim transaction",
        blockexplorer_refund_tx: "refund transaction",
        help: "Help",
        network_fee: "Network Fee",
        fee: "Boltz Fee",
        denomination: "Denomination",
        send: "Send",
        claim: "Claim",
        receive: "Receive",
        min: "Min",
        max: "Max",
        minimum_amount: "Minimum amount is {{ amount }} {{ denomination }}",
        maximum_amount: "Maximum amount is {{ amount }} {{ denomination }}",
        assets: "Multi-Layer",
        footer: "Made with ❤️ by Team Boltz",
        create_channel: "Create Lightning Channel",
        create_channel_subline: "Channel Inbound or Outbound Capacity",
        create_swap: "Create Atomic Swap",
        create_swap_subline: "Payment Includes Network and Boltz Fee",
        cancel_swap: "Cancel Swap",
        new_swap: "New Swap",
        success_swap: "Swap Success",
        feecheck:
            "Network fee was updated based on network situation, please confirm new amounts and continue with swap.",
        create_and_paste:
            "Paste a bolt11 lightning invoice\n or a Lightning address\nor a LNURL Paylink",
        congrats: "Congratulations!",
        successfully_swapped:
            "You successfully received {{ amount }} {{ denomination }}!",
        timeout_eta: "Timeout ETA",
        pay_invoice: "Swap: {{ id }}",
        pay_swap_404: "Swap not found!",
        pay_timeout_blockheight: "Timeout block height",
        pay_expected_amount: "Expected amount",
        send_to: "Send {{ amount }} {{ denomination }} to",
        pay_invoice_to:
            "Pay this invoice about {{ amount }} {{ denomination }}",
        pay_address: "Address",
        no_metamask: "MetaMask not installed",
        connect_metamask: "Connect MetaMask",
        connect_to_address: "Connect to MetaMask to set address",
        disconnect_address: "Disconnect MetaMask",
        lockup_failed: "Lockup Failed!",
        lockup_failed_subline:
            "Your lockup transaction failed, wait for the timeout to refund.",
        failure_reason: "Failure reason",
        invoice_payment_failure: "Could not pay your lightning invoice",
        onchain_address: "Enter {{ asset }} address",
        onchain_address_no_asset: "Enter address",
        download_refund_file: "Download refund file",
        invalid_refund_file: "Invalid refund file",
        invalid_backup_file: "Invalid backup file",
        invalid_invoice:
            "Please provide a valid LN invoice, LNAddress or LNURL",
        invalid_0_amount: "Invoices without amount are not supported",
        copy_invoice: "lightning invoice",
        copy_address: "address",
        copy_amount: "amount",
        copy_bip21: "BIP21",
        copied: "Copied!",
        backup_skip: "Skip download",
        backup_refund: "Download Refund File",
        backup_refund_subline:
            "If this swap fails, you'll have to refund your chain bitcoin using your refund key. This key is stored in your browser's storage by default, but can be lost if you",
        backup_refund_list_incognito: "are using incognito mode",
        backup_refund_list_tor: "are using Tor browser",
        backup_refund_list_clear_history: "clear your browsing history",
        backup_refund_skip:
            "If any of the above applies to you, we strongly recommend downloading this refund file!",
        refund_a_swap: "Refund a swap",
        refund_a_swap_subline:
            "Upload your refund file and reclaim your locked funds",
        refund_past_swaps: "Past swaps",
        refund_past_swaps_subline:
            "Swaps that got saved into your browsers storage",
        history_no_swaps: "Looks like you didn't do any swaps yet.",
        refund_address_header:
            "Enter address of your {{ asset }} wallet to refund",
        refund_address_header_no_asset:
            "Enter address of your wallet to refund",
        refund_backup: "Backup",
        refund_import: "Import Backup",
        refund_clear: "Delete storage",
        delete_swap: "Delete swap from storage",
        delete_storage:
            "Are you sure you want to clear your storage?\nYour swap information and you refund / claim private keys will be lost.",
        delete_storage_single_swap:
            "Are you sure you want to clear Swap {{ id }} from your storage?\nYour swap information and you refund / claim private keys will be lost.",
        delete_logs: "Are you sure you want to clear your logs?",
        tx_in_mempool: "Transaction is in mempool",
        tx_in_mempool_subline: "Waiting for confirmation to complete the swap",
        expired: "Swap expired!",
        invoice_pending: "Transaction received, paying invoice.",
        invoice_expired: "Invoice expired, try again!",
        swap_expired: "You did not complete your payment in time.",
        create_invoice_webln: "create invoice via WebLN",
        pay_invoice_webln: "pay invoice via WebLN",
        select_asset: "Select {{ direction }} Asset",
        tx_confirmed: "Transaction confirmed",
        tx_ready_to_claim: "Claiming transaction now...",
        transaction_refunded: "Boltz has refunded the Transaction",
        refunded: "Swap has been refunded successfully!",
        broadcasted: "Refund broadcasted",
        locktime_not_satisfied: "Locktime requirement not satisfied",
        already_refunded: "Swap already refunded",
        api_offline: "API is offline",
        api_offline_msg:
            "Could not connect to the Boltz API, please try again later",
        refund_explainer: "You will be able to refund after the timeout",
        swap_not_refundable_yet: "Your swap is not refundable yet",
        wasm_not_supported: "Please activate WebAssembly in your browser",
        ios_image_download:
            'Long press and select "Save to Photos" to download refund file',
        created: "Created",
        view: "View",
        id: "ID",
        headline: "Non-Custodial Bitcoin Bridge",
        subline:
            "Swap between different Bitcoin layers while staying in full control.",
        start_swapping: "Start Swapping",
        partners: "Partners",
        integrations: "Integrations",
        oldest_channel_years: "{{ years }} yrs",
        oldest_channel: "Oldest Channel",
        capacity: "Capacity ({{ denomination }})",
        peers: "Number of Peers",
        num_channels: "Number of Channels",
        beta_caution: "BETA - USE WITH CAUTION!",
        warning_return: "Important: Return to this page after paying invoice",
        warning_expiry:
            "Make sure your transaction confirms within ~24 hours after creation of this swap!",
        not_found: "404 - Page Not Found",
        not_found_subline: "The page you are looking for does not exist.",
        back_to_home: "Back to Home",
        transaction_prompt:
            'Press "{{ button }}" in order to open your connected wallet and confirm the displayed transaction.',
        invalid_address: "Invalid {{ asset }} address",
        scan_qr_code: "Scan QR Code",
        version: "Version",
        commithash: "Commit Hash",
        open_in_wallet: "Open in Wallet",
        invoice_paid: "Invoice paid",
        creating_coop_claim: "Creating cooperative claim transaction.",
        branding: "Branding",
        testnet: "Testnet",
        broadcasting_claim: "Broadcasting claim transaction...",
        open_swap: "Open Swap",
        swap_in_history: "Swap found in history.",
        paste_invalid:
            "Clipboard contains invalid characters or maximum amount is exceeded",
        email: "Email",
        switch_paste: "Switched swap direction/asset based on pasted content",
        canary: "Canary",
        settings: "Settings",
        decimal_separator: "Decimal Separator",
        denomination_tooltip: "Choose your preferred denomination: BTC or sats",
        decimal_tooltip:
            "Choose your preferred decimal separator: dot or comma",
        swap_completed: "Swap {{ id }} completed successfully!",
        claim_fail: "Failed to claim swap: {{ id }}",
        logs: "Logs",
        logs_tooltip: "Logs of the web app, useful for debugging",
        enable_audio_notifications: "Audio Notifications",
        enable_audio_notifications_tooltip:
            "Enable or disable audio notifications",
        on: "on",
        off: "off",
        notification_header: "Boltz",
        browsernotification: "Browser Notifications",
        browsernotification_tooltip: "Enable or disable browser notifications",
        browsernotification_error: "Notification permissions denied",
        invalid_pair: "Invalid pair",
        reckless_mode_setting: "Reckless Mode",
        reckless_mode_setting_tooltip:
            "Disables prompts to download refund file and other confirmation steps",
    },
    de: {
        language: "Deutsch",
        status: "Status",
        feedback: "Feedback? Schreib uns auf",
        fast: "Schnell",
        l2: "Auf Layer-2 gebaut",
        l2_sub: "Boltz nutzt Layer-2 Skalierungstechnologien wie das Lightning-Netzwerk",
        assets_sub: "Lightning / Bitcoin / Liquid",
        safe: "Sicher",
        non_custodial: "Non-Custodial",
        non_custodial_sub:
            "Swaps auf Boltz sind atomar, Kryptografie stellt sicher, dass Nutzer stets die Kontrolle über ihre Bitcoin behalten",
        node: "Knoten",
        lightningnode: "Knoten anzeigen",
        error: "Fehler",
        error_subline:
            "Ungültige Antwort von der API, irgendwas ist hier falsch.",
        error_wasm: "WebAssembly nicht unterstützt",
        history: "Historie",
        swap: "Swap",
        channel: "Kanal",
        refund: "Rückerstattung",
        blog: "Blog",
        documentation: "Docs",
        onion: "Onion",
        blockexplorer: "{{ typeLabel }} anzeigen",
        blockexplorer_lockup_address: "Lockupadresse",
        blockexplorer_lockup_tx: "Lockuptransaktion",
        blockexplorer_claim_tx: "Claimtransaktion",
        blockexplorer_refund_tx: "Rückerstattungstransaktion",
        help: "Hilfe",
        network_fee: "Netzwerkgebühr",
        fee: "Boltzgebühr",
        denomination: "Denominierung",
        send: "Sende",
        claim: "Claim",
        receive: "Empfange",
        min: "Min",
        max: "Max",
        minimum_amount: "Mindestbetrag ist {{ amount }} {{ denomination }}",
        maximum_amount: "Höchstbetrag ist {{ amount }} {{ denomination }}",
        assets: "Multi-layer",
        footer: "Gemacht mit ❤️ von Team Boltz",
        create_channel: "Erstelle Lightning-Kanal",
        create_channel_subline: "Eingehende oder ausgehende Kapazität",
        create_swap: "Erstelle Atomic Swap",
        create_swap_subline: "Zahlung beinhaltet Netzwerk- und Boltzgebühr",
        cancel_swap: "Swap abbrechen",
        new_swap: "Neuer Swap",
        success_swap: "Swap erfolgreich!",
        feecheck:
            "Die Netzwerkgebühr wurde aufgrund der Netzwerksituation aktualisiert. Bitte bestätige die neuen Beträge und fahren mit dem Swap fort.",
        create_and_paste:
            "Füge eine bolt11 Lightning-Rechnung\n eine Lightning-Adresse\n oder einen LNURL Paylink hier ein",
        congrats: "Herzlichen Glückwunsch!",
        successfully_swapped:
            "Du hast erfolgreich {{ amount }} {{ denomination }} empfangen!",
        timeout_eta: "Timeout-ETA",
        pay_invoice: "Swap: {{ id }}",
        pay_swap_404: "Swap nicht gefunden!",
        pay_timeout_blockheight: "Timeout Blockhöhe",
        pay_expected_amount: "Erwarteter Betrag",
        send_to: "Sende {{ amount }} {{ denomination }} an",
        pay_invoice_to:
            "Zahle diese Rechnung über {{ amount }} {{ denomination }}",
        pay_address: "Adresse",
        no_metamask: "MetaMask ist nicht installiert",
        connect_metamask: "MetaMask verbinden",
        connect_to_address: "Mit MetaMask verbinden um Adresse zu setzen",
        disconnect_address: "MetaMask trennen",
        lockup_failed: "Lockup fehlgeschlagen!",
        lockup_failed_subline:
            "Deine Lockup-Transaktion ist fehlgeschlagen, warte auf den Timeout, um eine Rückerstattung zu starten.",
        failure_reason: "Grund für den Fehler",
        invoice_payment_failure:
            "Deine Lightning-Rechung konnte nicht bezahlt werden",
        onchain_address: "{{ asset }}-Adresse eingeben",
        onchain_address_no_asset: "Adresse",
        download_refund_file: "Rückerstattungsdatei herunterladen",
        invalid_refund_file: "Ungültige Rückerstattungsdatei",
        invalid_backup_file: "Ungültige Backupdatei",
        invalid_invoice: "Bitte gültige Rechnung, LNAdresse/LNURL eingeben",
        invalid_0_amount: "Lightning Rechnungen ohne Betrag nicht unterstützt",
        copy_invoice: "Lightning-Rechnung",
        copy_address: "Adresse",
        copy_amount: "Betrag",
        copy_bip21: "BIP21",
        copied: "kopiert!",
        backup_skip: "Überspringen",
        backup_refund: "Rückerstattungsdatei herunterladen",
        backup_refund_subline:
            "Falls dieser Swap fehlschlagen sollte, musst du dir deine Bitcoin mit deinem Rückerstattungsschlüssel zurückholen. Dieser Schlüssel wird standardmäßig in dein Browser gespeichert, kann aber verloren gehen wenn",
        backup_refund_list_incognito: "du ein Inkognito Fenster verwendest",
        backup_refund_list_tor: "du Tor Browser verwendest",
        backup_refund_list_clear_history: "die Browser Daten gelöscht werden",
        backup_refund_skip:
            "Falls einer dieser Punkte zutrifft, empfehlen wir ausdrücklich die Rückerstattungsdatei herunterzuladen!",
        refund_a_swap: "Einen Swap erstatten",
        refund_a_swap_subline:
            "Lade deine Rückerstattungsdatei hoch und hole dir deine Bitcoin aus einem fehlgeschlagenen Swap zurück",
        refund_past_swaps: "Historische Swaps",
        refund_past_swaps_subline:
            "Swaps, die in deinem Browser gespeichert wurden",
        history_no_swaps:
            "Es sieht so aus, als hättest du noch nicht geswappt.",
        refund_address_header: "Adresse deines {{ asset }} Wallet eingeben",
        refund_address_header_no_asset: "Adresse deines Wallet eingeben",
        refund_backup: "Backup",
        refund_import: "Backup importieren",
        refund_clear: "Speicher löschen",
        delete_swap: "Swap aus dem Speicher löschen",
        delete_storage:
            "Bist du sicher, dass du deinen Speicher löschen möchtest?\nDeine Swap-Informationen und Rückerstattungsschlüssel gehen dabei verloren.",
        delete_storage_single_swap:
            "Bist du sicher, dass du den Swap {{ id }} aus deinem Speicher löschen möchtest?\nDeine Swap-Informationen und Rückerstattungsschlüssel gehen dabei verloren.",
        delete_logs: "Bist du sicher, dass du deine Logs löschen möchtest?",
        tx_in_mempool: "Transaktion befindet sich im Mempool.",
        tx_in_mempool_subline:
            "Warte auf Bestätigung, um den Swap abzuschließen.",
        expired: "Swap ist abgelaufen!",
        invoice_pending: "Transaktion erhalten, Rechnung wird bezahlt.",
        invoice_expired: "Rechnung ist abgelaufen, bitte erneut versuchen!",
        swap_expired: "Du hast deine Zahlung nicht rechtzeitig abgeschlossen.",
        create_invoice_webln: "Rechnung über WebLN erstellen",
        pay_invoice_webln: "Rechnung über WebLN bezahlen",
        select_asset: "{{ direction }} - Asset auswählen",
        tx_confirmed: "Transaktion bestätigt!",
        tx_ready_to_claim: "Claime die Transaktion jetzt...",
        transaction_refunded: "Boltz hat die Transaktion erstattet.",
        refunded: "Swap wurde erfolgreich erstattet!",
        broadcasted: "Rückerstattung gesendet.",
        locktime_not_satisfied: "Locktime-Anforderung nicht erfüllt.",
        already_refunded: "Swap wurde bereits erstattet!",
        api_offline: "API ist offline",
        api_offline_msg:
            "Konnte keine Verbindung zur Boltz API herstellen. Bitte versuche es später noch einmal.",
        refund_explainer:
            "Du kannst nach dem Timeout eine Rückerstattung beantragen",
        swap_not_refundable_yet:
            "Dein Swap kann noch nicht erstattet werden. Warte auf den Timeout, um eine Rückerstattung zu starten.",
        wasm_not_supported:
            "Bitte aktivieren Sie WebAssembly in Ihrem Browser!",
        ios_image_download:
            'Lange drücken und "In Fotos speichern" auswählen, um die Rückerstattungsdatei herunterzuladen',
        created: "Erstellt",
        view: "Anzeigen",
        id: "ID",
        headline: "Non-Custodial Bitcoin Bridge",
        subline:
            "Tausche zwischen verschiedenen Bitcoin Layern, während du immer die volle Kontrolle behältst.",
        start_swapping: "Starte Swap",
        partners: "Partner",
        integrations: "Integrationen",
        oldest_channel_years: "{{ years }} Jahre",
        oldest_channel: "Ältester Kanal",
        capacity: "Kapazität ({{ denomination }})",
        peers: "Anzahl der Peers",
        num_channels: "Anzahl der Kanäle",
        beta_caution: "BETA - OBACHT!",
        warning_return:
            "Wichtig: Kehre nach dem Bezahlen der Rechnung zu dieser Seite zurück!",
        warning_expiry:
            "Wichtig: Die Transaktion muss innerhalb ~24 Stunden nach Erstellung dieses Swaps bestätigt sein!",
        not_found: "404 - Seite nicht gefunden",
        not_found_subline: "Die gesuchte Seite existiert nicht.",
        back_to_home: "Zurück zur Startseite",
        transaction_prompt:
            '"{{ button }}" klicken um das verbundene Wallet zu öffnen und bestätige die angezeigte Transaktion.',
        invalid_address: "Ungültige {{ asset }} Adresse",
        scan_qr_code: "QR Code scannen",
        version: "Version",
        commithash: "Commit Hash",
        open_in_wallet: "Im Wallet öffnen",
        invoice_paid: "Rechnung bezahlt",
        creating_coop_claim: "Erstelle kooperative Claim-Transaktion.",
        branding: "Branding",
        testnet: "Testnet",
        broadcasting_claim: "Sende claim transaction...",
        open_swap: "Swap öffnen",
        swap_in_history: "Swap in Historie gefunden.",
        paste_invalid:
            "Zwischenablage enthält ungültige Zeichen oder der maximale Betrag wurde überschritten",
        email: "Email",
        switch_paste:
            "Swap-Richtung/Asset basierend auf eingefügtem Inhalt gewechselt",
        canary: "Canary",
        settings: "Einstellungen",
        decimal_separator: "Dezimaltrennzeichen",
        denomination_tooltip:
            "Wähle deine bevorzugte Denomination: BTC oder sats",
        decimal_tooltip:
            "Wähle dein bevorzugtes Dezimaltrennzeichen: Punkt oder Komma",
        swap_completed: "Swap {{ id }} erfolgreich abgeschlossen!",
        claim_fail: "Swap {{ id }} konnte nicht geclaimed werden!",
        logs: "Logs",
        logs_tooltip: "Logs der Web App, nützlich für Debugging",
        enable_audio_notifications: "Audio Benachrichtigungen",
        enable_audio_notifications_tooltip:
            "Aktiviere oder deaktiviere Audio-Benachrichtigungen",
        on: "an",
        off: "aus",
        notification_header: "Boltz",
        browsernotification: "Browser Benachrichtigungen",
        browsernotification_tooltip:
            "Aktiviere oder deaktiviere Browser Benachrichtigungen",
        browsernotification_error: "Benachrichtigungsrechte verweigert",
        invalid_pair: "Ungültiges Paar",
        reckless_mode_setting: "Reckless Modus",
        reckless_mode_setting_tooltip:
            "Deaktiviert Downloadaufforderung der Rückerstattungsdatei und andere Bestätigungsschritte",
    },
    es: {
        language: "Español",
        status: "Estado",
        feedback: "¿Tienes comentarios? Únete a nuestro",
        fast: "Rápido",
        l2: "Construido en la Capa 2",
        l2_sub: "Boltz utiliza tecnologías de segunda capa como la red de Lightning",
        assets_sub: "Lightning / Bitcoin / Liquid",
        safe: "Seguro",
        non_custodial: "Sin Custodia",
        non_custodial_sub:
            "Los intercambios en Boltz son atomicos, la criptografía garantiza que los usuarios siempre tienen el control de su Bitcoin",
        node: "Nodo",
        lightningnode: "Ver nodo Lightning",
        error: "Error",
        error_subline: "Respuesta inválida de la API, algo está mal :/",
        error_wasm: "WebAssembly no soportado",
        history: "Historia",
        swap: "Intercambio",
        channel: "Canal",
        refund: "Reembolso",
        blog: "Blog",
        documentation: "Docs",
        onion: "Onion",
        blockexplorer: "Ver en {{ typeLabel }}",
        blockexplorer_lockup_address: "Dirección Lockup",
        blockexplorer_lockup_tx: "Transacción de Lockup",
        blockexplorer_claim_tx: "Transacción de Reclamación",
        blockexplorer_refund_tx: "Transacción de Reembolso",
        help: "Ayuda",
        network_fee: "Comisión de red",
        fee: "Comisión de Boltz",
        denomination: "Denominación",
        send: "Enviar",
        claim: "Reclamar",
        receive: "Recibir",
        min: "Mín",
        max: "Máx",
        minimum_amount: "La cantidad mínima es {{ amount }} {{ denomination }}",
        maximum_amount: "La cantidad máxima es {{ amount }} {{ denomination }}",
        assets: "Multicapa",
        footer: "Hecho con ❤️ por el equipo de Boltz",
        create_channel: "Crear canal Lightning",
        create_channel_subline: "Capacidad del canal entrante o saliente",
        create_swap: "Crear intercambio atómico",
        create_swap_subline:
            "El pago incluye la comisión de red y servicio de Boltz",
        cancel_swap: "Cancelar intercambio",
        new_swap: "Nuevo intercambio",
        success_swap: "Intercambio realizado con éxito!",
        feecheck:
            "La comisión de red se actualizó según la situación de la red. Por favor, confirma los nuevos importes y continúa con el intercambio.",
        create_and_paste:
            "Pegar una factura Lightning bolt11\n o una dirección Lightning\n o un enlace LNURL Pay",
        congrats: "¡Felicitaciones!",
        successfully_swapped:
            "Has recibido con éxito {{ amount }} {{ denomination }}!",
        timeout_eta: "Tiempo de espera estimado",
        pay_invoice: "Intercambio: {{ id }}",
        pay_swap_404: "¡Intercambio no encontrado!",
        pay_timeout_blockheight: "Altura del bloque de tiempo de espera",
        pay_expected_amount: "Importe esperado",
        send_to: "Enviar {{ amount }} {{ denomination }} a",
        pay_invoice_to: "Pague esta factura de {{ amount }} {{ denomination }}",
        pay_address: "Dirección",
        no_metamask: "MetaMask no está instalado",
        connect_metamask: "Conectar MetaMask",
        connect_to_address:
            "Conectar con MetaMask para establecer la dirección",
        disconnect_address: "Desconectar MetaMask",
        lockup_failed: "Fallo en el lockup",
        lockup_failed_subline:
            "Su transacción de lockup falló, espere el tiempo de espera para obtener un reembolso.",
        failure_reason: "Motivo del fallo",
        invoice_payment_failure: "No se pudo pagar su factura Lightning",
        onchain_address: "Ingrese la dirección de {{ asset }}",
        onchain_address_no_asset: "Ingrese la dirección",
        download_refund_file: "Descargar archivo de reembolso",
        invalid_refund_file: "Archivo de reembolso no válido",
        invalid_backup_file: "Archivo de backup no válido",
        invalid_invoice: "Por favor, pegue una factura, LNAddress/LNURL válida",
        invalid_0_amount: "No se admiten facturas sin importe",
        copy_invoice: "factura Lightning",
        copy_address: "dirección",
        copy_amount: "importe",
        copy_bip21: "BIP21",
        copied: "Copiado",
        backup_skip: "Saltar",
        backup_refund: "Descargar archivo de reembolso",
        backup_refund_subline:
            "Si este intercambio falla, tendrás que reembolsar tu bitcoin utilizando tu clave de reembolso. Esta clave se guarda por defecto en el almacenamiento de tu navegador, pero puede perderse si",
        backup_refund_list_incognito: "utiliza el modo incógnito",
        backup_refund_list_tor: "utiliza el navegador Tor",
        backup_refund_list_clear_history: "borra tu historial de navegación",
        backup_refund_skip:
            "Si alguno de los puntos anteriores le afecta, le recomendamos que descargue el archivo de reembolso.",
        refund_a_swap: "Reembolsar un intercambio",
        refund_a_swap_subline:
            "Cargue su archivo de reembolso y recupere sus fondos bloqueados",
        refund_past_swaps: "Intercambios anteriores",
        refund_past_swaps_subline:
            "Intercambios que se guardaron en el almacenamiento del navegador",
        history_no_swaps: "Parece que aún no has realizado ningún intercambio.",
        refund_address_header:
            "Introduzca la dirección de tu monedero {{ asset }} para reembolsar",
        refund_address_header_no_asset:
            "Introduzca la dirección de tu monedero para reembolsar",
        refund_backup: "Backup",
        refund_import: "Importar Backup",
        refund_clear: "Borrar almacenamiento",
        delete_swap: "Eliminar intercambio del almacenamiento",
        delete_storage:
            "¿Estás seguro de que deseas borrar tu almacenamiento?\nSe perderán la información de su intercambio y sus claves de reembolso.",
        delete_storage_single_swap:
            "¿Estás seguro de que deseas borrar el intercambio {{ id }} de tu almacenamiento?\nSe perderán la información de su intercambio y sus claves privadas de reembolso.",
        delete_logs: "¿Estás seguro de que deseas borrar tus registros?",
        tx_in_mempool: "La transacción está en el mempool.",
        tx_in_mempool_subline:
            "Esperando confirmación para completar el intercambio",
        expired: "¡El intercambio ha expirado!",
        invoice_pending: "Transacción recibida, pagando la factura...",
        invoice_expired: "La factura ha expirado, ¡intente nuevamente!",
        swap_expired: "No completaste tu pago a tiempo.",
        create_invoice_webln: "Crear factura a través de WebLN",
        pay_invoice_webln: "Pagar factura a través de WebLN",
        select_asset: "Seleccionar activo de {{ direction }}",
        tx_confirmed: "Transacción confirmada!",
        tx_ready_to_claim: "Reclamando la transacción ahora...",
        transaction_refunded: "Boltz ha reembolsado la transacción!",
        refunded: "El intercambio ha sido reembolsado!",
        broadcasted: "Reembolso transmitido!",
        locktime_not_satisfied:
            "No se cumple el requisito de tiempo de bloqueo!",
        already_refunded: "El intercambio ya ha sido reembolsado!",
        api_offline: "API está offline!",
        api_offline_msg:
            "No se pudo conectar a la API de Boltz, por favor inténtelo de nuevo más tarde!",
        refund_explainer:
            "Podrás solicitar un reembolso después del tiempo de espera.",
        swap_not_refundable_yet:
            "Tu intercambio aún no es reembolsable, por favor inténtelo de nuevo más tarde!",
        wasm_not_supported: "Por favor, activa WebAssembly en tu navegador!",
        ios_image_download:
            'Mantén presionado y selecciona "Guardar en Fotos" para descargar el archivo de reembolso.',
        created: "Creado",
        view: "Ver",
        id: "ID",
        headline: "Bitcoin Bridge Sin Custodia",
        subline:
            "Intercambia entre diferentes capas de Bitcoin mientras mantienes el control total.",
        start_swapping: "Comenzar a intercambiar",
        partners: "Socios",
        integrations: "Integraciones",
        oldest_channel_years: "{{ years }} años",
        oldest_channel: "Canal más antiguo",
        capacity: "Capacidad ({{ denomination }})",
        peers: "Número de peers",
        num_channels: "Número de canales",
        beta_caution: "BETA - ¡ÚSALO CON PRECAUCIÓN!",
        warning_return:
            "Importante: Regresa a esta página después de pagar la factura!",
        warning_expiry:
            "Importante: Asegúrese de que la transacción se confirma en ~24 horas",
        not_found: "404 - Página no encontrada",
        not_found_subline: "La página buscada no existe.",
        back_to_home: "Volver al inicio",
        transaction_prompt:
            'Pulse "{{ button }}" para abrir su monedero conectado y confirmar la transacción mostrada.',
        invalid_address: "Dirección {{ asset }} inválida",
        scan_qr_code: "Escanear código QR",
        version: "Versión",
        commithash: "Commit Hash",
        open_in_wallet: "Abrir en monedero",
        invoice_paid: "Factura pagada",
        creating_coop_claim:
            "Creación de una transacción de reclamación cooperativa.",
        branding: "Branding",
        testnet: "Testnet",
        broadcasting_claim: "Enviando transacción de reclamación...",
        open_swap: "Abrir intercambio",
        swap_in_history: "Intercambio encontrado en la historia.",
        paste_invalid:
            "El portapapeles contiene caracteres no válidos o se ha excedido el importe máximo",
        email: "Email",
        switch_paste:
            "Cambiado de dirección/activo de intercambio basado en el contenido pegado",
        canary: "Canary",
        settings: "Ajustes",
        decimal_separator: "Separador decimal",
        denomination_tooltip: "Elige tu denominación preferida: BTC o sats",
        decimal_tooltip: "Elige tu separador decimal preferido: punto o coma",
        swap_completed: "¡Intercambio {{ id }} completado con éxito!",
        claim_fail: "¡Error en reclamar el intercambio {{ id }}!",
        logs: "Logs",
        logs_tooltip:
            "Registros de la aplicación web como herramienta de depuración",
        enable_audio_notifications: "Notificaciones de Audio",
        enable_audio_notifications_tooltip:
            "Activar o desactivar notificaciones de audio",
        on: "on",
        off: "off",
        notification_header: "Boltz",
        browsernotification: "Notificaciones del navegador",
        browsernotification_tooltip:
            "Activar o desactivar notificaciones del navegador",
        browsernotification_error: "Permisos de notificación denegados",
        invalid_pair: "Par no válido",
        reckless_mode_setting: "Modo Reckless",
        reckless_mode_setting_tooltip:
            "Desactiva los avisos para descargar el archivo de reembolso y otros pasos de confirmación",
    },
    zh: {
        language: "中文",
        status: "状态",
        feedback: "有反馈？加入我们的",
        fast: "快速",
        l2: "建立在二层网络之上",
        l2_sub: "Boltz利用像闪电网络这样的二层网络扩展技术",
        assets_sub: "闪电网络/比特币/Liquid",
        safe: "安全",
        non_custodial: "非托管",
        non_custodial_sub:
            "Boltz上的交换是原子式,密码学确保用户始终掌握自己的资金",
        node: "闪电网络节点",
        lightningnode: "查看闪电网络节点",
        error: "错误",
        error_subline: "API的响应无效，出现异常。",
        error_wasm: "不支持WebAssembly",
        history: "历史",
        swap: "交换",
        channel: "通道",
        refund: "退款",
        blog: "博客",
        documentation: "文档",
        onion: "洋葱",
        blockexplorer: "打开{{ typeLabel }}",
        blockexplorer_lockup_address: "锁仓地址",
        blockexplorer_lockup_tx: "锁仓交易",
        blockexplorer_claim_tx: "索赔交易",
        blockexplorer_refund_tx: "退款交易",
        help: "帮助",
        network_fee: "网络费",
        fee: "Boltz费",
        denomination: "面额",
        send: "发送",
        claim: "索赔",
        receive: "接收",
        min: "最小",
        max: "最大",
        minimum_amount: "最小金额为{{ amount }}{{ denomination }}",
        maximum_amount: "最大金额为{{ amount }}{{ denomination }}",
        assets: "多层",
        footer: "Boltz团队倾情 ❤️ 制作",
        create_channel: "创建闪电网络通道",
        create_channel_subline: "通道入站或出站容量",
        create_swap: "创建原子交换",
        create_swap_subline: "付款包括网络和Boltz服务费",
        cancel_swap: "取消交换",
        new_swap: "新的交换",
        success_swap: "交换成功",
        feecheck: "根据网络情况更新了网络费用，请确认新的金额并继续进行交换。",
        create_and_paste:
            "粘贴一个bolt11闪电发票\n或闪电网络地址\n或LNURL支付链接",
        congrats: "恭喜！",
        successfully_swapped: "您成功收到{{ amount }}{{ denomination }}！",
        timeout_eta: "超过预期时间",
        pay_invoice: "交换：{{ id }}",
        pay_swap_404: "找不到交换！",
        pay_timeout_blockheight: "超时区块高度",
        pay_expected_amount: "预期金额",
        send_to:
            "请确保将准确的金额{{ amount }}{{ denomination }}发送到下面显示的地址。否则,交换将失败。最好使用“复制BIP21”按钮,并将其粘贴到您钱包的发送屏幕中。",
        pay_invoice_to: "支付金额为{{ amount }}{{ denomination }}的发票",
        pay_address: "地址",
        no_metamask: "未安装MetaMask",
        connect_metamask: "连接MetaMask",
        connect_to_address: "连接MetaMask以设置地址",
        disconnect_address: "断开MetaMask",
        lockup_failed: "锁仓失败！",
        lockup_failed_subline: "您的锁仓交易失败，请等待超时进行退款。",
        failure_reason: "失败原因",
        invoice_payment_failure: "无法支付您的闪电发票",
        onchain_address: "输入{{ asset }}地址",
        onchain_address_no_asset: "地址",
        download_refund_file: "下载退款文件",
        invalid_refund_file: "无效的退款文件",
        invalid_backup_file: "无效的备份文件",
        invalid_invoice: "请提供有效的闪电网络发票、LNAddress或LNURL",
        invalid_0_amount: "不支持没有金额的发票",
        copy_invoice: "闪电网络发票",
        copy_address: "地址",
        copy_amount: "金额",
        copy_bip21: "BIP21",
        copied: "已复制",
        backup_skip: "跳过下载",
        backup_refund: "下载退款文件",
        backup_refund_subline:
            "如果此交换失败，您将不得不使用退款密钥退还链上的比特币。默认情况下，此密钥存储在浏览器的本地存储中，但如果您",
        backup_refund_list_incognito: "正在使用隐身模式",
        backup_refund_list_tor: "正在使用Tor浏览器",
        backup_refund_list_clear_history: "清除您的浏览历史记录",
        backup_refund_skip: "如果您符合以上任何条件，强烈建议下载此退款文件！",
        refund_a_swap: "退还交换",
        refund_a_swap_subline: "上传您的退款文件，取回被锁定的资金",
        refund_past_swaps: "过去的交换",
        refund_past_swaps_subline: "保存在浏览器存储中的交换",
        history_no_swaps: "看起来您还没有进行任何交换。",
        refund_address_header: "输入要退款的 {{ asset }} 钱包地址",
        refund_address_header_no_asset: "输入要退款的钱包地址",
        refund_backup: "备份",
        refund_import: "导入备份",
        refund_clear: "删除本地存储",
        delete_swap: "从本地存储中删除交换",
        delete_storage:
            "您确定要清除本地存储吗？\n您的交换信息和您的退款/索赔私钥将丢失。",
        delete_storage_single_swap: "您确定要从本地存储中清除交换{{ id }}吗",
        delete_logs: "您确定要删除日志吗？",
        tx_in_mempool: "事务在内存池中",
        tx_in_mempool_subline: "等待确认以完成交换",
        expired: "交换已过期！",
        invoice_pending: "收到交易，正在支付发票。",
        invoice_expired: "发票已过期，请重试！",
        swap_expired: "您未能在规定时间内完成付款。",
        create_invoice_webln: "通过WebLN创建发票",
        pay_invoice_webln: "通过WebLN支付发票",
        select_asset: "选择{{ direction }}资产",
        tx_confirmed: "交易已确认",
        tx_ready_to_claim: "现在要求交换……",
        transaction_refunded: "Boltz已退款交易!",
        refunded: "交换已退还",
        broadcasted: "退款已广播",
        locktime_not_satisfied: "未满足锁定时间要求",
        already_refunded: "交换已经退还",
        api_offline: "API离线",
        api_offline_msg: "无法连接到Boltz API,请稍后重试",
        refund_explainer: "您将能够在超时后退款",
        swap_not_refundable_yet: "您的交换尚不可退还",
        wasm_not_supported: "请在您的浏览器中激活WebAssembly",
        ios_image_download: "长按并选择“保存到照片”以下载退款文件",
        created: "已创建",
        view: "查看",
        id: "ID",
        headline: "非托管比特币跨链桥",
        subline: "在不同比特币层之间交换，同时保持完全控制。",
        start_swapping: "开始交换",
        partners: "合作伙伴",
        integrations: "集成",
        oldest_channel_years: "{{ years }}年",
        oldest_channel: "最老的通道",
        capacity: "容量（{{ denomination }}）",
        peers: "对端数",
        num_channels: "通道数",
        beta_caution: "BETA - 谨慎使用！",
        warning_return: "重要：支付发票后返回此页面",
        warning_expiry: "确保您的交易在创建此交换后的约24小时内确认！",
        not_found: "404 - 页面未找到",
        not_found_subline: "您要查找的页面不存在。",
        back_to_home: "返回首页",
        transaction_prompt:
            "按“{{ button }}”以打开已连接的钱包并确认显示的交易。",
        invalid_address: "无效的{{ asset }}地址",
        scan_qr_code: "扫描 QR 码",
        version: "版本",
        commithash: "提交哈希",
        open_in_wallet: "在钱包中打开",
        invoice_paid: "发票已支付",
        creating_coop_claim: "创建合作索赔交易。",
        branding: "品牌",
        testnet: "测试网",
        broadcasting_claim: "正在发送索赔交易...",
        open_swap: "打开交换",
        swap_in_history: "在历史记录中找到交换。",
        paste_invalid: "剪贴板包含无效字符或超出最大金额",
        email: "邮箱",
        switch_paste: "根据粘贴的内容切换交换方向/资产",
        canary: "金丝雀搜查令",
        settings: "设置",
        decimal_separator: "小数分隔符",
        denomination_tooltip: "选择您的首选面额：BTC 或 sats",
        decimal_tooltip: "选择您的首选小数分隔符：点或逗号",
        swap_completed: "交换{{ id }} 已成功完成！",
        claim_fail: "交换{{ id }}索赔失败！",
        logs: "日志",
        logs_tooltip: "网络应用程序的日志，用于调试",
        enable_audio_notifications: "音频通知",
        enable_audio_notifications_tooltip: "启用或禁用音频通知",
        on: "开",
        off: "关",
        notification_header: "Boltz",
        browsernotification: "浏览器通知",
        browsernotification_tooltip: "启用或禁用浏览器通知",
        browsernotification_error: "通知权限被拒绝",
        invalid_pair: "无效交换对",
        reckless_mode_setting: "鲁莽模式",
        reckless_mode_setting_tooltip: "禁用下载退款文件的提示和其他确认步骤",
    },
};

const rawDict = JSON.parse(JSON.stringify(dict));

Object.entries(dict)
    .filter(([lang]) => lang !== "en")
    .map(([, langDict]) => {
        Object.entries(dict.en).map(([key, enVal]) => {
            if (langDict[key] === undefined) {
                langDict[key] = enVal;
            }
        });
    });

export default dict;
export { rawDict };
