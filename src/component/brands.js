const CBrands = {
    render() {
        return `
        <div class="widget widget-brands">
        <div class="widget-title">
            <h5>Brands</h5>
        </div>
        <div class="widget-content">
            <form>

                <div class="check-option">
                    <input type="checkbox" class="checkbox-style" name="brands" id="Opel" value="Opel">
                    <label for="Opel" class="checkbox-label">Opel <span>(5)</span></label>
                </div>

                <div class="check-option">
                    <input type="checkbox" class="checkbox-style" name="brands" id="Subaru" value="Subaru">
                    <label for="Subaru" class="checkbox-label">Subaru <span>(77)</span></label>
                </div>

                <div class="check-option">
                    <input type="checkbox" class="checkbox-style" name="brands" id="BMW" value="BMW">
                    <label for="BMW" class="checkbox-label">BMW <span>(16)</span></label>
                </div>

                <div class="check-option">
                    <input type="checkbox" class="checkbox-style" name="brands" id="Toyota" value="Toyota">
                    <label for="Toyota" class="checkbox-label">Toyota <span>(11)</span></label>
                </div>

                <div class="check-option">
                    <input type="checkbox" class="checkbox-style" name="brands" id="Audi" value="Audi">
                    <label for="Audi" class="checkbox-label">Audi <span>(54)</span></label>
                </div>

                <div class="check-option">
                    <input type="checkbox" class="checkbox-style" name="brands" id="Chevrolet" value="Chevrolet">
                    <label for="Chevrolet" class="checkbox-label">Chevrolet <span>(22)</span></label>
                </div>
            </form>
        </div>
    </div>
        `
    }
}
export default CBrands;