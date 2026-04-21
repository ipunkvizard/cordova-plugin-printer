declare namespace CordovaPrinter {
  interface PrinterOptions {
    name?: string;
    duplex?: boolean;
    orientation?: 'portrait' | 'landscape';
    monochrome?: boolean;
    photo?: boolean;
    bounds?: boolean;
    ui?: boolean;
    copies?: number;

    // iOS / Android extras
    printerId?: string;
    paper?: {
      width: number;
      height: number;
    };

    header?: string;
    footer?: string;
  }

  type Callback<T = any> = (result: T) => void;

  interface PrinterPlugin {
    /**
     * Check whether printing is available
     */
    check(success?: Callback<boolean>, error?: Callback<any>): void;

    /**
     * Open native printer picker
     */
    pick(success?: Callback<string>, error?: Callback<any>): void;

    /**
     * Print content
     * content can be HTML string, text, PDF URL, image URL, base64, etc.
     */
    print(
      content?: string,
      options?: PrinterOptions,
      success?: Callback<void>,
      error?: Callback<any>
    ): void;

    /**
     * Returns whether service is available
     */
    isAvailable(success?: Callback<boolean>): void;
  }
}

interface CordovaPlugins {
  printer: CordovaPrinter.PrinterPlugin;
}

interface Cordova {
  plugins: CordovaPlugins;
}

interface Window {
  cordova: Cordova;
}